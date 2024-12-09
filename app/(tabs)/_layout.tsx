import HomeLogo from "@/components/logo/home";
import { Tabs } from "expo-router";
import { colors } from "@/components/ui/gluestack-ui-provider/config";
import LogoutLogo from "@/components/logo/logout";
import { useLanguage } from "@/hooks/languageHook";

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
          tabBarIcon: ({ color }) => <HomeLogo color={color} />,
        }}
      />
      <Tabs.Screen
        name="logout"
        options={{
          title: textContent.logout,
          tabBarIcon: ({ color }) => <LogoutLogo color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
