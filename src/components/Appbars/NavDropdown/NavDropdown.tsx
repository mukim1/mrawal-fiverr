import { Button, Menu } from "@mantine/core";
import React from "react";
import { CiSettings } from "react-icons/ci";

const NavDropdown = () => {
  return (
    <>
      <Menu trigger="hover" openDelay={100} closeDelay={400} width="100%">
        {/* ... menu items */}
        <Menu.Target>
          <span className="text-lg text-white hover:border-b-white">
            Toggle menu
          </span>
        </Menu.Target>

        <Menu.Dropdown className="px-9">
          <div className="flex justify-between ">
            <Menu.Label>Application</Menu.Label>
            <Menu.Label>Application</Menu.Label>
          </div>

          <Menu.Divider />
          <div className="flex justify-between ">
            <div>
              <Menu.Item icon={<CiSettings size={14} />}>Settings</Menu.Item>
              <Menu.Item icon={<CiSettings size={14} />}>Messages</Menu.Item>
              <Menu.Item icon={<CiSettings size={14} />}>Gallery</Menu.Item>
            </div>
            <div>
              <Menu.Item icon={<CiSettings size={14} />}>Settings</Menu.Item>
              <Menu.Item icon={<CiSettings size={14} />}>Messages</Menu.Item>
              <Menu.Item icon={<CiSettings size={14} />}>Gallery</Menu.Item>
            </div>
            <div>
              <Menu.Item icon={<CiSettings size={14} />}>Settings</Menu.Item>
              <Menu.Item icon={<CiSettings size={14} />}>Messages</Menu.Item>
              <Menu.Item icon={<CiSettings size={14} />}>Gallery</Menu.Item>
            </div>
          </div>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default NavDropdown;
