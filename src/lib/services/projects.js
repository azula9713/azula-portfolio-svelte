import { collection, getDocs } from 'firebase/firestore';

import db from '$lib/db';

const getProjects = async () => {
	const querySnapshot = await getDocs(collection(db, 'projects'));

	const projects = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		name: doc.data().name,
		description: doc.data().description,
		github: doc.data().github,
		image: doc.data().image,
		link: doc.data().link,
		tech: doc.data().tech,
		...doc.data()
	}));
	return projects;
};

export { getProjects };
