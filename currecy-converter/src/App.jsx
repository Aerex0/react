import { useState } from 'react'
import './App.css'
import InputBox from './components/Input';
import useCurrencyInfo from './hooks/usecurrencyinfo';

function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('eur');
  const [convertedAmount, setConvertedAmount] = useState('');

  const fromCurrencyInfo = useCurrencyInfo(fromCurrency);

  const options = Object.keys(fromCurrencyInfo)
  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }
  const convert = () => {
    setConvertedAmount(amount * fromCurrencyInfo[toCurrency]);
  }
  
  

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/5833263/pexels-photo-5833263.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={setAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFromCurrency(currency)}
                                selectCurrency={fromCurrency}
                                amountDisable={false}
                                currencyDisable={false}
                                className="w-full mb-1"
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                onAmountChange={setConvertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setToCurrency(currency)}
                                selectCurrency={toCurrency}
                                amountDisable={true}
                                currencyDisable={false}
                                className="w-full mb-1"
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            {fromCurrency} to {toCurrency} 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
