import { Tabs } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";

const NavTabs = () => {
  const navigate = useNavigate();
  const currPath = useLocation().pathname;

  return (
    <Tabs
      variant="pills"
      value={currPath}
      onChange={(value) => navigate(`${value}`)}
    >
      <Tabs.List>
        <Tabs.Tab value="/question-list">Question List</Tabs.Tab>
        <Tabs.Tab value="/question-creator">Submit A Question</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

export default NavTabs;