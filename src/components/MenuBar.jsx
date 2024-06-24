import { SubMenu } from "./SubMenu";

export const MenuBar = () => {
  return (
    <div className="mx-auto">
      <div className="my-[4rem] p-2  max-w-[900px] mx-auto">
        <div className="bg-white rounded p-2">
          <div className=" bg-BG_LIGHT rounded-md border border-gray-400 w-fit mx-auto">
            <ul className="md:flex xl:flex-row justify-evenly font-semibold select-none grid grid-cols px-2 sm:px-0 items-center mx-2">
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
        </div>
      </div>
    </div>
  );
};
