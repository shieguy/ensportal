import React, { Component } from 'react';
import styled from 'styled-components';
import Faq from './Faq'

const Container = styled.div`
`;

class Blurb extends Component 
{
    render()
    {
        return(
            <Container>       
                <Faq 
                    question="Why register a subdomain via ENSPortal?"
                    answer={[
                        `TESTING CHANGES
                        `
                    ]}
                />

                <Faq 
                    question="Can the owner of the top-level domain change my subdomains?"
                    answer={[
                        `No, all domains are locked in the ENSNow contract and can only be changed by the Controller (you).`,
                        `Only you (Controller) can change the addresses your subdomain points to, using the ENS app (app.ens.domains).`
                    ]}
                />                

                <Faq 
                    question="What is mulitcoin support?"
                    answer={[
                        `Using the ENS app (app.ens.domains), you can configure your domain to resolve to different addresses across multiple chains.`,
                        `Supported chains: ${["ETH", "BTC", "LTC", "DOGE", "MONA", "ETC", "RSK", "XRP", "BCH", "BNB"].join(", ")}.`,
                        `Read <a href="https://medium.com/the-ethereum-name-service/ens-launches-multi-coin-support-15-wallets-to-integrate-92518ab20599" target="_blank">the documentation</a> ${' '}
                        about how to add your other addresses to your name and what chains and wallets are supported.`
                    ]}
                />         

                <Faq 
                    question="What are the best practices if I am concerned about my privacy?"
                    answer={[
                        `Use a new address and seed some ETH from a mixer like Tornado.cash or from an exchange account like Binance.`,
                        `Never use an address that connects to any other address you’ve ever used.`
                    ]}
                />   
            </Container>
        );
    }
}


export default Blurb;