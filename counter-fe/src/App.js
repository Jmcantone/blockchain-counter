import { useState, useEffect } from "react";
import { useWeb3, useContract } from "./hooks/web3"; 
import CounterAbi from "./contracts/Counter.json"

function App() {
  //CONST
  const provider = "ws://127.0.0.1:8545";
  const defaultAccount = "0x90bB7461A72f90e54bd6D73858D3658b658A166C";
  const contractAddress = "0xEa42806fd61A2985B74DF7E23912E87B1fc1550e";

  //HOOKS
  const web3 = useWeb3(provider, defaultAccount);
  const contract = useContract(web3, CounterAbi, contractAddress);
  const [ counterValue, setCounterValue ] = useState(0);

  useEffect(async () => {
    await updateCounterValue()
  }, [])

  async function handleIncrement()
  {
    await contract.methods.increment().send({from: defaultAccount})
    await updateCounterValue()
  }
   
  async function handleDecrement()
  {
    await contract.methods.decrement().send({from: defaultAccount})
    await updateCounterValue()
  }

  async function updateCounterValue()
  {
    setCounterValue(await contract.methods.counter().call())
  }

  return (
    <div className="App">
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <span>Valor actual: {counterValue}</span>
    </div>
  );
}

export default App;
