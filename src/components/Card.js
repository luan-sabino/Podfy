import banner from '../img/profile.jpg';

export default function Card(props){
    return(
        <div className={"rounded-sm bg-card p-4 text-md w-full min-w-180 h-full hidden " + props.handleVisibility}>
            <img src={banner} alt='Banner' className="rounded-xl shadow-card mb-4 "/>
            <a className="min-h-61 text-white" href='/'>
                <h1>{props.title}</h1>
                <span className="text-unselected font-light">{props.desc}</span>
            </a>
        </div>
    );
}