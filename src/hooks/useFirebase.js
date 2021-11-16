import {
	createUserWithEmailAndPassword,
	getAuth,
	getIdToken,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import authenticationInitialize from '../Pages/Login/Firebase/firebase.initilization';

authenticationInitialize();

const goggleProvider = new GoogleAuthProvider();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [authError, setAuthError] = useState('');
	const [admin, setAdmin] = useState(false);
	const [token, setToken] = useState('');
	const auth = getAuth();

	const signInWithGoogle = (location, history) => {
		setIsLoading(true);
		signInWithPopup(auth, goggleProvider)
			.then((result) => {
				const user = result.user;
				saveUser(user.email, user.displayName, 'PUT');
				setAuthError('');

				const destination = location?.state?.from || '';
				history.replace(destination);
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	const registerUser = (email, password, name, history) => {
		setIsLoading(true);

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setAuthError('');
				history.replace('/');
				const newUser = { email, displayName: name };
				setUser(newUser);

				//Save to user

				saveUser(email, name, 'POST');

				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {})
					.catch((error) => {});

				history.replace('/');
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	const loginUser = (email, password, history, location) => {
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const destination = location?.state?.from || '/';
				history.replace(destination);
				setAuthError('');
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);

				getIdToken(user).then((idToken) => {
					setToken(idToken);
				});
			} else {
				setUser(user);
			}
			setIsLoading(false);
		});
		return () => unsubscribed;
	}, []);

	useEffect(() => {
		fetch(`https:/frozen-crag-17113.herokuapp.com/users/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setAdmin(data.admin));
	}, [user?.email]);

	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {})
			.catch((error) => {})
			.finally(() => setIsLoading(false));
	};

	const saveUser = (email, displayName, method) => {
		const user = { email, displayName };

		fetch('https:/frozen-crag-17113.herokuapp.com/users', {
			method: method,
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		}).then();
	};

	return {
		user,
		authError,
		admin,
		token,
		registerUser,
		logOut,
		isLoading,
		loginUser,
		signInWithGoogle,
	};
};

export default useFirebase;
