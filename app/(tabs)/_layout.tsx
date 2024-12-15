import { Tabs } from "expo-router";
import { colors } from "@/components/ui/gluestack-ui-provider/config";
import { useLanguage } from "@/hooks/languageHook";
import { Home, UserRound, Search, Bolt } from "lucide-react-native";

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
        name="search"
        options={{
          title: textContent.search,
          tabBarIcon: ({ color }) => <Search color={color} />,
        }}
      />
      <Tabs.Screen
        name="tools"
        options={{
          title: textContent.tools,
          tabBarIcon: ({ color }) => <Bolt color={color} />,
        }}
      />

      <Tabs.Screen
        name="user"
        options={{
          title: textContent.profile,
          tabBarIcon: ({ color }) => <UserRound color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
