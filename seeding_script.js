const admin = require('firebase-admin');
const serviceAccount = require('../functions/api/config/serviceAccountKey.json'); // Adjust path as needed

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function seedProjectData() {
    const batch = db.batch();
    const projectPostsRef = db.collection('project_posts');

    for (let i = 0; i < 5; i++) {
        const id = projectPostsRef.doc().id;
        const ref = projectPostsRef.doc(id);
        batch.set(ref, {
            id: id,
            title: `Enterprise Project ${i + 1}`,
            category: 'Software Architecture',
            description: 'Large scale system architecture and backend optimization for enterprise operation level.',
            ownerId: 'admin_seeder_professional',
            ownerName: 'Work Hub Admin',
            status: 'approved',
            createdAt: Date.now() - (i * 86400000),
            deadline: Date.now() + (30 * 86400000),
            budgetMin: 50000 + (i * 10000),
            budgetMax: 100000 + (i * 20000),
            postType: 'project',
            requiredSkills: ['Node.js', 'Express', 'Firebase Cloud Functions', 'Flutter'],
            location: 'Remote',
            type: 'Fixed',
            applicants: {},
            applicationsCount: 0,
            isVerified: true,
            companyName: 'Work Hub Analytics',
            projectDuration: '1 Month',
            ndaRequired: true,
            depositAmount: 5000,
            compensationType: 'Lump Sum'
        });
    }

    await batch.commit();
    console.log('Successfully seeded 5 enterprise projects.');
    process.exit(0);
}

seedProjectData().catch(console.error);
