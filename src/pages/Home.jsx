import React from 'react';
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sortType, setSortType] = React.useState(0);
  const [categoryId, setCategoryId] = React.useState(0);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const itemsRes = await axios.get(
        categoryId
          ? `https://633ed7b183f50e9ba3b9e39b.mockapi.io/items?sortBy=rating&order=desc&category=${categoryId}`
          : `https://633ed7b183f50e9ba3b9e39b.mockapi.io/items?sortBy=rating&order=desc`,
      );

      setIsLoading(false);

      setItems(itemsRes.data);
      console.log(itemsRes);
    }
    window.scrollTo(0, 0);
    fetchData();
  }, [categoryId]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
        <Sort
          type={sortType}
          setSortType={setSortType}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(items.length || 10)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                {...obj}
              />
            ))}
      </div>
    </div>
  );
}

export default Home;
