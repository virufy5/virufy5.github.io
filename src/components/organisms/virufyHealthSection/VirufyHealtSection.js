
//Organismo
import Title from "~/components/atoms/Title/Title"
import Text from "~/components/atoms/Text/Text";
import * as React from 'react';

export default function VirufyHealtSection() {

    const [value, setValue] = React.useState('');

    const options = [
        { label: 'Select a category', value: '1' },
        { label: 'Global Impact', value: '2' },
        { label: 'Technology', value: '3' },
        { label: 'Volunteer Stories', value: '4' },
    ];

    const handleChange = (event) => {
        setValue(event.target.value)
    };

    return (
        <div>
            <div className=" h-[300px] lg:h-[459px] bg-slate-100 px-[5%] flex flex-col items-center justify-center gap-5">
                <div className=" w-[340px] md:w-[100vw] max-w-[1440px]">
                    <Title
                        H="h1"
                        Text="Virufy Health Blog"
                        TitleClassProps="text-center"
                    />
                    <div className="w-full flex md:w-1/2 lg:w-1/3 mx-auto justify- bg-white px-2 mt-7 mb-5 lg:mt-11 lg:mb-9">
                        <select id='xyz' value={value} onChange={handleChange} className="bg-white w-full py-4">
                            {options.map((option, id) => (
                                <option className="bg-white w-[50px]" key={id} value={option.value}>{option.label} </option>
                            ))}
                        </select>
                    </div>
                    <Text
                        Style="normal"
                        Text="Select a category from the drop down menu"
                        TextClassProps="text-center"
                    />
                </div>
            </div>
        </div>
    );
}