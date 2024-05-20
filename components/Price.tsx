import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const PriceContext = createContext({ currency: { type: "", }, changeCurrency: ({ type = "" }) => { } });

interface PriceProviderProps{
    children: React.ReactNode;
}
// Create a provider component
export const PriceProvider = (props:PriceProviderProps) => {
    const{children}=props;
    const [currency, setCurrency] = useState({ type: "" }); // Initial price

    const changeCurrency = ({ type = "" }) => {
        setCurrency({ type })

    }

    return (
        <PriceContext.Provider value={{ currency, changeCurrency }}>
            {children}
        </PriceContext.Provider>
    );
};

// Custom hook to use the price context
export const usePrice = () => {
    const context = useContext(PriceContext);
    if (!context) {
        throw new Error('usePrice must be used within a PriceProvider');
    }
    return context;
};


export function CurrencyComboBox() {
    let { currency, changeCurrency } = usePrice();
    const handleUpdatePrice = () => {
        changeCurrency({
            type: "KES",
        })
    };
    return (<button onClick={() => { handleUpdatePrice() }}>Update Price </button>)
}


interface PriceDisplay {
    priceType: string;
    priceValue: number;
}

const curencyList = [{ type: "KES", rates: 6 }, { type: "UGX", rates: 5 }]

export function PriceDisplay(props: PriceDisplay) {
    const { priceType, priceValue } = props;
    const { currency, changeCurrency } = usePrice();
    const [newValues, setNewValues] = useState<{ price: number, type: string }>({ price: priceValue, type: priceType });

    useEffect(() => {
        if (priceType != currency.type) {

            const found = curencyList.find((element) => element.type === currency.type) as { rates: number, type: string };
            if (found) {
                setNewValues({ price: found.rates*priceValue, type: found.type })
            }

        } else {
            setNewValues({ price: priceValue, type: priceType })
        }

    }, [currency])
    return (
        <div>
            <h2>{newValues.type}: {newValues.price.toFixed(2)}</h2>
        </div>
    );
}