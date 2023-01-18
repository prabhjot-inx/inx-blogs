import { Navbar, Link, Text, Avatar, Dropdown, Button } from "@nextui-org/react";
import { Layout } from "./Layout";
import Logo from "./Logo";
import NextLink from "next/link";

export default function AppNavbar() {
  const collapseItems = [
    {
      label: 'Posts',
      path: '/posts'
    },
    {
      label: 'Create Posts',
      path: '/posts/create'
    },
    {
      label: 'About Us',
      path: '#'
    },
    {
      label: 'Contact Us',
      path: '#'
    },
    {
      label: 'Help & Feedback',
      path: '#'
    },
    {
      label: 'Logout',
      path: '#'
    },

    // "Profile",
    // "Dashboard",
    // "Activity",
    // "Analytics",
    // "System",
    // "Deployments",
    // "My Settings",
    // "Team Settings",
    // "Help & Feedback",
    // "Log Out",
  ];

  return (
    <Layout>
      <Navbar variant="sticky" >
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          as={NextLink}
          href='/'
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Logo />
          <Text b color="inherit">
            iBlogs
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <Navbar.Link as={NextLink} href="/posts">All Posts</Navbar.Link>
          <Navbar.Link as={NextLink} isActive href="/posts/create">
            Create Post
          </Navbar.Link>
          <Navbar.Link href="#">About Us</Navbar.Link>
          {/* <Navbar.Link href="#">Contact Us</Navbar.Link> */}
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            {/* <NextLink href="/login">
              Login
            </NextLink> */}
            <Button auto flat as={NextLink} bordered href="/login">
              Login
            </Button>
          </Navbar.Item>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        {/* <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content> */}
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item.label}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                as={NextLink}
                css={{
                  minWidth: "100%",
                }}
                href={item.path}
              >
                {item.label}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
