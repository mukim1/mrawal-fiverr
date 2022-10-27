import { Menu } from "@mantine/core";

export const Solutions = () => {
  return (
    <TBDropdown name="Solutions">
     <div className="flex gap-x-7">
     <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sint
        explicabo officia repellat tempora voluptate nisi dolorum temporibus
        veniam minima accusantium excepturi libero odio sunt asperiores
        veritatis, obcaecati mollitia perspiciatis? At repellat repellendus
        minus ut, nulla error eius delectus illum modi quaerat iste nesciunt
        quibusdam ab amet in rem exercitationem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sint
        explicabo officia repellat tempora voluptate nisi dolorum temporibus
        veniam minima accusantium excepturi libero odio sunt asperiores
        veritatis, obcaecati mollitia perspiciatis? At repellat repellendus
        minus ut, nulla error eius delectus illum modi quaerat iste nesciunt
        quibusdam ab amet in rem exercitationem.
      </p>
     </div>
    </TBDropdown>
  );
};

export const Resources = () => {
  return (
    <TBDropdown name="Resources">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sint
        explicabo officia repellat tempora voluptate nisi dolorum temporibus
        veniam minima accusantium excepturi libero odio sunt asperiores
        veritatis, obcaecati mollitia perspiciatis? At repellat repellendus
        minus ut, nulla error eius delectus illum modi quaerat iste nesciunt
        quibusdam ab amet in rem exercitationem.
      </p>
    </TBDropdown>
  );
};

const TBDropdown = ({ children, name }: TBDropdownProp) => (
  <Menu trigger="hover" openDelay={100} closeDelay={400} offset={-60}>
    <Menu.Target>
      <button className="text-xl">{name}</button>
    </Menu.Target>
    <Menu.Dropdown sx={{ borderRadius: 0 }}>
      <div className="text-black p-10 w-screen relative">
        <h4 className="text-2xl">{name}</h4>
        {children}
      </div>
    </Menu.Dropdown>
  </Menu>
);

interface TBDropdownProp {
  children: React.ReactNode;
  name: string;
}
