const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL), // URL
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID), // ProjectID
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID), // DatabaseID
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID), // CollectionID
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID), // BucketID
};

export default conf;
