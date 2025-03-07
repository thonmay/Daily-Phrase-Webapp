import React from 'react';

const NotificationSettings = ({ 
  notificationTime, 
  notificationsEnabled, 
  onTimeChange, 
  onToggleNotifications 
}) => {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Notification Settings</h3>
      
      <div className="flex items-center justify-between mb-4">
        <label htmlFor="notification-toggle" className="text-gray-700">
          Daily phrase notifications
        </label>
        
        <div className="relative inline-block w-12 mr-2 align-middle select-none">
          <input
            type="checkbox"
            id="notification-toggle"
            checked={notificationsEnabled}
            onChange={onToggleNotifications}
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          />
          <label
            htmlFor="notification-toggle"
            className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
              notificationsEnabled ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></label>
        </div>
      </div>
      
      <div className="mt-4">
        <label htmlFor="notification-time" className="block text-gray-700 mb-2">
          Notification time
        </label>
        <input
          type="time"
          id="notification-time"
          value={notificationTime}
          onChange={(e) => onTimeChange(e.target.value)}
          className={`w-full p-2 border rounded ${
            notificationsEnabled 
              ? 'border-blue-300 bg-white' 
              : 'border-gray-300 bg-gray-100 cursor-not-allowed'
          }`}
          disabled={!notificationsEnabled}
        />
        <p className="text-sm text-gray-500 mt-2">
          You'll receive a notification with your daily phrase at this time
        </p>
      </div>
    </div>
  );
};

export default NotificationSettings;