'use client';
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';

interface GitHubProfile {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    followers: number;
    following: number;
    public_repos: number;
}

const UserProfilePage = () => {
    const params = useParams<{ slug: string }>();
    const username = params.slug;
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((data) => setProfileData(data));
    }, [username]);
    
    const [profileData, setProfileData] = React.useState<GitHubProfile>({
        avatar_url: 'https://avatars.githubusercontent.com/u/placeholder',
        name: 'Loading...',
        login: 'loading',
        bio: '',
        followers: 0,
        following: 0,
        public_repos: 0,
    });

    return (
        <div className="min-h-screen bg-gray-950">

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        {/* Profile Image Section */}
                        <div className="w-full md:w-1/3">
                            <img
                                className="w-full rounded-lg shadow-2xl"
                                src={profileData.avatar_url}
                                alt={profileData.name}
                            />
                        </div>

                        {/* Profile Info Section */}
                        <div className="w-full md:w-2/3 space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2">
                                    {profileData.name}
                                </h1>
                                <p className="text-emerald-500 text-xl">
                                    @{profileData.login}
                                </p>
                            </div>

                            {profileData.bio && (
                                <p className="text-gray-300 text-lg">
                                    {profileData.bio}
                                </p>
                            )}

                            {/* Stats Section */}
                            <div className="grid grid-cols-3 gap-4 bg-gray-900 p-4 rounded-lg">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-white">
                                        {profileData.followers}
                                    </p>
                                    <p className="text-gray-400">Followers</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-white">
                                        {profileData.following}
                                    </p>
                                    <p className="text-gray-400">Following</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-white">
                                        {profileData.public_repos}
                                    </p>
                                    <p className="text-gray-400">Repositories</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UserProfilePage;