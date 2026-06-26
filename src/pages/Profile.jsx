import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Calendar, Shield } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Profile</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your personal information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card>
          <div className="text-center">
            <div className="w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {user?.name?.charAt(0) || 'U'}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{user?.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">{user?.email}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{user?.role}</p>
            
            <div className="mt-6 space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>Joined {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Profile Details */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Personal Information</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </Button>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                icon={User}
                defaultValue={user?.name}
                disabled={!isEditing}
              />
              <Input
                label="Email"
                type="email"
                icon={Mail}
                defaultValue={user?.email}
                disabled={!isEditing}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Phone"
                icon={Phone}
                placeholder="+1 (555) 000-0000"
                disabled={!isEditing}
              />
              <Input
                label="Location"
                icon={MapPin}
                placeholder="City, Country"
                disabled={!isEditing}
              />
            </div>

            {isEditing && (
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="secondary" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  Save Changes
                </Button>
              </div>
            )}
          </form>
        </Card>
      </div>

      {/* Security Section */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Security</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Password</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Last changed 30 days ago</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Change Password</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;