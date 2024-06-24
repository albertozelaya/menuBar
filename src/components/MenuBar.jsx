import { SubMenu } from "./SubMenu";

export const MenuBar = () => {
  return (
    <div className=" bg-BG_LIGHT rounded-md border border-gray-400 w-fit mx-auto">
      <ul className="flex justify-evenly font-semibold select-none px-2 sm:px-0 items-center mx-2">
        <li className="hover:bg-BG_DARK rounded">
          <a href="" className="block p-2 px-3">
            File
          </a>
        </li>
        <li className="hover:bg-BG_DARK rounded">
          <a href="" className="block p-2 px-3">
            File
          </a>
        </li>
        <li className="hover:bg-BG_DARK rounded">
          <a href="" className="block p-2 px-3">
            File
          </a>
        </li>
        <li className="rounded relative">
          <SubMenu />
        </li>
      </ul>
    </div>
  );
};
