
import React from 'react';

const countries = [
    {
        name: 'India',
        flag: 'https://freepngdesign.com/content/uploads/images/india-flag-1900.png',
        color: 'bg-violet-600',
        percentage: 40,
    },
    {
        name: 'USA',
        flag: 'https://tse4.mm.bing.net/th/id/OIP.DP3Vo8PEReh_qJwHkl95mwHaEC?rs=1&pid=ImgDetMain',
        color: 'bg-orange-700',
        percentage: 25,
    },
    {
        name: 'CANADA',
        flag: 'https://th.bing.com/th/id/R.14d1c4951831cc754aef00d63a387fc6?rik=A6viwB6iix%2blzA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f06%2fCanada-Flag-PNG-Picture.png&ehk=SH%2fmitlZoXUQwF9Kp3InuhN6RdS42hV2TAaWqTKOpbY%3d&risl=&pid=ImgRaw&r=0',
        color: 'bg-yellow-400',
        percentage: 10,
    },
    {
        name: 'UAE',
        flag: 'https://tse2.mm.bing.net/th/id/OIP.iNlB5YFVSLA18wLIgfrAVwHaHa?rs=1&pid=ImgDetMain',
        color: 'bg-emerald-700',
        percentage: 7,
    },
];

const CountryStats = () => {
    return (
        <div className="bg-black text-white p-2 rounded-xl w-full md:w-full  lg:w-full overflow-x-hidden space-y-2">
            {countries.map((country) => (
                <div key={country.name} className="flex items-center justify-between space-y-1">
                    {/* <div className="flex items-center justify-between"></div> */}
                    <div className="">
                        <img src={country.flag} alt={country.name} className="w-10 h-8 rounded-sm" />
                    </div>
                    <div className="w-full flex flex-col  justify-start px-2 py-1">
                        <div className="flex justify-between items-start  ">
                            <span className="text-base font-base">{country.name}</span>
                            <span className="text-sm ">{country.percentage}%</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-800 rounded-full">
                            <div
                                className={`h-full ${country.color} rounded-full`}
                                style={{ width: `${country.percentage}%` }}
                            />
                        </div>
                    </div>
                </div>
            ))}

            <div className="border-t border-zinc-700 pt-4 flex justify-end gap-4 items-center">
                <span className="text-sm">View all countries</span>
                <span className="text-xl">→</span>
            </div>
        </div>
    );
};

export default CountryStats;
