import { useState } from "react";
import Categories from "./Categories";
import data from "./data";
import Menu from "./Menu";

function App() {

  const allCategories = ['All', ...new Set(data.map((item) => item.category))]
  console.log(allCategories)

  const [menuItems, setMenuItems] = useState(data)
  // console.log(menuItems)
  const [categories, setCategories] = useState(allCategories)

  const [activeMenu, setActiveMenu] = useState(false)

  const filterMenuItems = (category, index) => {
    setActiveMenu(true)
    console.log('act', activeMenu)

    console.log(index)
    // if (category === 'Lunch') {
    //   console.log(activeMenu)
    //   setMenuItems(data)
    //   setActiveMenu({...activeMenu, [index]: true})
    //   // setActiveMenu({...activeMenu, [index]: !activeMenu[index]})
    //   return
    // }
    if (category === 'All') {
      // setActiveMenu({...activeMenu, [index]: true})
      setMenuItems(data)
      // setActiveMenu({...activeMenu, [index]: !activeMenu[index]})
      return
    }
    const newItems = data.filter((item) => item.category === category)
    setMenuItems(newItems)

  }
  return (
    <main className="app px-14 md:px-24 mt-4">
      <section className="app w-full">
        <h1 className="our-menu text-[#102a42] text-4xl capitalize font-bold text-center mb-3">
          Our Menu
        </h1>
        <div className="underline w-[5rem] h-[0.25rem] bg-[#c59d5f] mx-auto my-auto"></div>
        <Categories
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          categories={categories}
          setCategories={setCategories}
          filterMenuItems={filterMenuItems}
        />
        <Menu
        menuItems={menuItems}
        />
      </section>
    </main>
  );
}

export default App;
