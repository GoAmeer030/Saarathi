import { Tabs } from "expo-router";
import { colors } from "@/components/ui/gluestack-ui-provider/config";
import { useLanguage } from "@/hooks/languageHook";
import { Home, LogOut } from "lucide-react-native";

const TabLayout = () => {
  const textContent = useLanguage("tabs");

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: textContent.home,
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="logout"
        options={{
          title: textContent.logout,
          tabBarIcon: ({ color }) => <LogOut color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
