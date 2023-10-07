import React, { Component } from 'react';
import "./RightSide.css";
import ImageLayout from '../ImageLayout';


class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state={ 
            data :[] 
        }
    }
    getData=()=>{
        let jsondata = [
            {
                "image" : "https://scontent.frba3-1.fna.fbcdn.net/v/t39.30808-1/358115554_2071258206549184_7887476093577911203_n.jpg?stp=cp0_dst-jpg_p86x86&_nc_cat=105&ccb=1-7&_nc_sid=5fac6f&_nc_eui2=AeH6eBzRR_XHRr5msEDt1XhxbarnANjmfv5tqucA2OZ-_kbnkNlfCOqlyAxwV6v0TZVTtG5OI-LRA1rUqq5EvT9Q&_nc_ohc=n5ewo9HTqDMAX9Jm-0n&_nc_ht=scontent.frba3-1.fna&oh=00_AfDAcxm_bZ_5aewRfm-OrCly8gCC9d763vwDR4qSNHG7HQ&oe=64F7E467",
                "text" : "Haaf Saa Sfn"
            },
            {
                "image" : "https://scontent.frba3-2.fna.fbcdn.net/v/t31.18172-1/10848798_1396023754029382_7912434564203265033_o.jpg?stp=c0.0.56.56a_cp0_dst-jpg_p56x56&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEAqK8KPcR941tXHDTyrqx3TxD9XS67JW9PEP1dLrslb2jR4eZpXGnb9LRQppWa2YD-mrDyB1Ln9q6hzFejPNQC&_nc_ohc=g-LCFKNs1SUAX9bQsCA&_nc_ht=scontent.frba3-2.fna&oh=00_AfAhKz7bh25dtTTisEIpigXfDR4Bdj_WML5_E3UOXFk4xw&oe=6519D4F0",
                "text" : "Oumaima wahbi"
            },
            {
                "image" : "https://scontent.frba3-2.fna.fbcdn.net/v/t39.30808-1/305651196_5461128563971782_8167411473525561765_n.jpg?stp=c0.23.56.56a_cp0_dst-jpg_p56x56&_nc_cat=108&ccb=1-7&_nc_sid=fe8171&_nc_eui2=AeH91KSq1UISoTSjX_GG6E5VozyhYY0iKt-jPKFhjSIq38ub6An_gCCFgzyezp2wUL44sShU_QuYpqSlBvD-2Sse&_nc_ohc=tiGHw3WA1KIAX90ql00&_nc_ht=scontent.frba3-2.fna&oh=00_AfCDnRME8mQrrIR0mwzc_XaHvCUa67ot-KGb2eKs3zjn8g&oe=64F71E92",
                "text" : "reda baaalou"
            },
            {
                "image" : "https://scontent.frba1-2.fna.fbcdn.net/v/t1.6435-1/209059612_757035314964745_2498541218367147697_n.jpg?stp=c1.0.56.56a_cp0_dst-jpg_p56x56&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHR5o-YeDYy9b1SQtHh6nDiPCBX1snoAq08IFfWyegCrfg2X4pKyzp0ufsXB9Pt1l24zHwuN68Tn8RzflxYx0XB&_nc_ohc=ythKmBv66OgAX8-WAAt&_nc_ht=scontent.frba1-2.fna&oh=00_AfDC1AS0GwAk9TdL_hw8IBoVcw4eQYLbXeRVgJpPXebPXw&oe=651AB61E",
                "text" : "dounia el kaabi"
            },
            {
                "image" : "https://scontent.frba1-1.fna.fbcdn.net/v/t39.30808-1/359077421_1732903547142050_4997412400010638930_n.jpg?stp=cp0_dst-jpg_s56x56&_nc_cat=105&ccb=1-7&_nc_sid=fe8171&_nc_eui2=AeHYHxa8VGCcPeENsKIaNCiIn24uQue3wnGfbi5C57fCcX1sZM5CuTpBX1kgXm9if4yOuuTz3EcCu_HbiucqLApt&_nc_ohc=jV2su8hEwxMAX-iQtkd&_nc_ht=scontent.frba1-1.fna&oh=00_AfD_P0Bm-M4vzCS1qhKwHzMlZ0stuepIzP9uPeGeJ29HyA&oe=64F67C6B",
                "text" : "hasnae benis"
            },
            {
                "image" : "https://scontent.frba2-2.fna.fbcdn.net/v/t39.30808-1/264811153_3000157640225520_5242276232784990600_n.jpg?stp=c13.0.56.56a_cp0_dst-jpg_p56x56&_nc_cat=103&ccb=1-7&_nc_sid=fe8171&_nc_eui2=AeEMmsnUSCZMn2Cg8Ixyp-sf031L3UCFxRzTfUvdQIXFHFn6BWvhVCCapCXLucQaCdZFnf4XTzitOZNPdTkpLJHg&_nc_ohc=yowirPjJYjoAX9Z2-KH&_nc_ht=scontent.frba2-2.fna&oh=00_AfA7S_G7rXogT2nrxrzMgYe1ElzqI7FOnVY9iIygL8BUQg&oe=64F7AB0F",
                "text" : "najat sefiani"
            },
            {
                "image" : "https://scontent.frba3-2.fna.fbcdn.net/v/t39.30808-1/358600529_10229771754902065_1350528014703697653_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=108&ccb=1-7&_nc_sid=fe8171&_nc_eui2=AeF2QOS_ruII7nKfV5aC6e62PitiYvtngJI-K2Ji-2eAkjLYKUy1T3eY7PQWeNLq1dUzNA2EmSkjbjRTBrzpkATY&_nc_ohc=6DtgdkAfBCEAX-uFM70&_nc_ht=scontent.frba3-2.fna&oh=00_AfBNC8JGFDiy_h3vCde6wVko3fcxSaua0wBejkABVAWPCw&oe=64F669B6",
                "text" : "saad lotfi"
            },
            {
                "image" : "https://scontent.frba3-2.fna.fbcdn.net/v/t39.30808-1/251808626_585585766090551_1334375473380005050_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=110&ccb=1-7&_nc_sid=fe8171&_nc_eui2=AeHbLm4BWNzLf2ZMD_6RX3gZ8fumjOnFv-7x-6aM6cW_7krnH5tSM7W3StmS7wgCxWnXz7s4o6kXcJiIf3l55yfI&_nc_ohc=8bnCKsex_uMAX-qFBHg&_nc_ht=scontent.frba3-2.fna&oh=00_AfCF6jLonS1mIgIRh_BLr1TRSdsg_6AgKpzUDJYOUwrtcQ&oe=64F7FE64",
                "text" : "badr samir"
            },
            {
                "image" : "https://scontent.frba3-1.fna.fbcdn.net/v/t39.30808-1/325136719_897890287904813_8872036274195989774_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=102&ccb=1-7&_nc_sid=6e0f69&_nc_eui2=AeEsar-rKpVwHd3_gNLjioXWhHdcy2QWGu2Ed1zLZBYa7Rbnv0R0ZgxFtZM88a7XIy-kbsjl8JPMRSxzc77GudG6&_nc_ohc=kDwDTIUkh3UAX9Ty4L3&_nc_ht=scontent.frba3-1.fna&oh=00_AfABrmNzdcrtCwNiDYnjs6PXcv0dw8DJYSNQOUv0Ht0wtQ&oe=64F6E169",
                "text" : "Youssef samir"
            }
        ];
        this.setState({data : jsondata});
    }

    componentDidMount(){
        this.getData();
    }
    render() { 
        return ( 
            <div className='right_container'>
                <div className='right_header'>
                    Contacts
                </div>
                <div className='right_content'>
                <div>
            {
                this.state.data.map( (item) => (
                    <ImageLayout image={item.image} text={item.text} />
                ))
            }
        </div>
                </div>
            </div>
        );
    }
}
 
export default RightSide;