
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

export function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

interface MyTabProps {
    children: React.ReactNode;
}

export default function MyTabs(props: MyTabProps) {

    return (

        <TabGroup {...props}>

        </TabGroup>

    )
}

interface MyTabHeaderLisProps {
    children: React.ReactNode;
}
export function MyTabHeaderList(props: MyTabHeaderLisProps) {
    return (<TabList className="flex mb-5 flex-nowrap justify-center" {...props}></TabList>)
}

export function MyTabHeaderItem({ title }: any) {
    return (<Tab
        className={({ selected }) =>
            classNames(selected ? "outline-none  border-b-4  border-orange-500 font-bold px-1 flex" : "  flex  px-1"
            )
        }>
        {title}
    </Tab>)
}


interface MyTabBodyProps {
    children: React.ReactNode;
}

export function MyTabBody(props: MyTabBodyProps) {
    return (<TabPanels className="bg-white h-full" {...props}></TabPanels>)
}

interface MyTabPanelListProps {
    children: React.ReactNode;
}

export function MyTabBodyItem(props: MyTabPanelListProps) {
    return (<TabPanel {...props}></TabPanel>)
}
{/**Example**
  <MyTabs>
            <MyTabHeaderList>
              <MyTabHeaderItem title="Tab"/>
              <MyTabHeaderItem title="Tab2"/>
            </MyTabHeaderList>
            <MyTabBody >
            <MyTabBodyItem>
              Button
            </MyTabBodyItem>
  
            <MyTabBodyItem>
              Button2
            </MyTabBodyItem>
            </MyTabBody>
          </MyTabs>
  **/}