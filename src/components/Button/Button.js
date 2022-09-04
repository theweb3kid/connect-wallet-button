import React, { useState, useEffect } from "react"
import './index.css'

export const Button = ({ isEVM }) => {

    const [wallet, setWallet] = useState("")
    const [buttonText, setButtonText] = useState("Connect Wallet")

    let connectWallet;

    if (isEVM == false) {

        const checkPhantomWallet = async () => {
            try {
                const { solana } = window;

                if (solana && solana.isPhantom) {
                    console.log("Phantom Wallet Exist")

                    const response = await solana.connect({ onlyIfTrusted: true });
                    console.log(
                        'Connected with Public Key:',
                        response.publicKey.toString()
                    );
                    setWallet(response.publicKey.toString())

                } else {
                    console.log("Download Phantom")
                    setButtonText("Download Phantom Wallet")
                }
            } catch (error) {
                console.log(error)
            }
        }

        const connectPhantomWallet = async () => {
            try {
                const { solana } = window;

                if (solana && solana.isPhantom) {
                    console.log("Phantom Wallet Exist")

                    const response = await solana.connect();
                    console.log(
                        'Connected with Public Key:',
                        response.publicKey.toString()
                    );
                    setWallet(response.publicKey.toString())
                    setButtonText("Connected To: " + wallet)
                } else {
                    console.log("Download Phantom")
                    setButtonText("Download Phantom Wallet")
                }
            } catch (error) {
                console.log(error)
            }
        }

        useEffect(() => {
            const onLoad = async () => {
                await checkPhantomWallet();
            };
            window.addEventListener('load', onLoad);
            return () => window.removeEventListener('load', onLoad);
        }, []);

        connectWallet = connectPhantomWallet


    } else if (isEVM == true) {

        const connectMetamaskWallet = async () => {
            const { ethereum } = window;

            if (ethereum) {
                setButtonText("Connecting...");
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts"
                });

                if (accounts.length !== 0) {
                    const account = accounts[0];
                    setButtonText("Connected To: " + account);
                    console.log("Connected To: ", account);
                } else {
                    console.log("Please authorize an account");
                }
            } else {
                console.log("Make sure you have MetaMask");
                setButtonText("Download MetaMask");
            }
        };

        const checkMetamaskWallet = async () => {
            const { ethereum } = window;
            if (!ethereum) {
                console.log("Make sure you have MetaMask");
                setButtonText("Download MetaMask");
                return;
            } else {
                console.log("We have the ethereumn object", ethereum);
            }

            const accounts = await ethereum.request({
                method: "eth_accounts"
            });

            if (accounts.length !== 0) {
                const account = accounts[0];
                console.log("Found an authorized account: ", account);

            } else {
                console.log("No authorized accoutn found");
            }

            const chainId = await ethereum.request({ method: "eth_chainId" });
            console.log("Chain ID: ", chainId);

            ethereum.on("chainChanged", handleChainChanged);
        };

        useEffect(() => {
            const onLoad = async () => {
                await checkMetamaskWallet();
            };
            window.addEventListener('load', onLoad);
            return () => window.removeEventListener('load', onLoad);
        }, []);

        connectWallet = connectMetamaskWallet


    }

    return (<button className="connect-button" onClick={connectWallet} >{buttonText}</button>)

}

export default Button
