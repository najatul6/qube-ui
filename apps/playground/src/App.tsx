import { Tabs } from "@qube-ui/tabs";

export default function App() {
  return (
    <div style={{ padding: 40 }}>
      <Tabs defaultValue="account">
        <Tabs.List>
          <Tabs.Trigger value="account">
            Account
          </Tabs.Trigger>

          <Tabs.Trigger value="password">
            Password
          </Tabs.Trigger>

          <Tabs.Trigger value="settings">
            Settings
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="account">
          <h2>Account</h2>
          <p>Manage your account settings.</p>
        </Tabs.Content>

        <Tabs.Content value="password">
          <h2>Password</h2>
          <p>Update your password.</p>
        </Tabs.Content>

        <Tabs.Content value="settings">
          <h2>Settings</h2>
          <p>General application settings.</p>
        </Tabs.Content>
      </Tabs>
    </div>
  );
}