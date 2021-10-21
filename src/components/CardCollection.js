import Card from "./Card";

export default function CardCollection(props){

    return(
        <section className="px-8 py-4 mb-4">
            <header className="flex justify-between pb-4 text-white items-center">
                <h1 className="text-2xl pb-4">{props.title}</h1>
                <a className="uppercase">Ver tudo</a>
            </header>
            <div className="grid grid-flow-col h-56 w-full gap-x-6 min-h-300">
                <Card handleVisibility="sm:block" title="Nerdcast" desc="934?"/>
                <Card handleVisibility="sm:block" title="Nerdcast" desc="934?"/>
                <Card handleVisibility="md:block" title="Nerdcast" desc="934?"/>
                <Card handleVisibility="lg:block" title="Nerdcast" desc="934?"/>
                <Card handleVisibility="xl:block" title="Nerdcast" desc="934?"/>
                <Card handleVisibility="2xl:block" title="Nerdcast" desc="934?"/>
            </div>
        </section>
    );
}