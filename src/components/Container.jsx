import { MenuBar } from "./MenuBar";

export const Container = () => {
  return (
    <div className="mx-auto">
      <div className="my-[4rem] p-2  max-w-[900px] mx-auto">
        <div className="bg-white rounded px-2 py-6">
          <MenuBar/>
        </div>
      </div>
    </div>
  );
};
