import React, { useEffect, useState } from 'react';

const CoinTracker = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState(0);
  const [changeMoney, setChangeMoney] = useState();
  const moneyChange = (e) => {
    setMyMoney(e.target.value);
  };
  const onchange = (e) => {
    setChangeMoney(Math.floor(myMoney / e.target.value));
  };

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <div>
            my money :
            <input type="number" value={myMoney} onChange={moneyChange}></input>
          </div>
          <select onChange={onchange}>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          {changeMoney ? <h3>{changeMoney}개 입니다.</h3> : null}
        </>
      )}
    </div>
  );
};

export default CoinTracker;
