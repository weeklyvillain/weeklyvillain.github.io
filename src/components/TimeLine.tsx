export const TimeLine = (): JSX.Element => {
    return (
        <div className="bg-base-200">
            <h1 className="text-5xl font-bold text-center pb-5">Experience</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                    <time className="font-mono italic">2021-2024</time>
                    <div className="text-lg font-black">Company A</div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi dolor tempora cupiditate incidunt tenetur ad beatae eum praesentium? Distinctio saepe nesciunt maiores voluptatibus ea esse laborum dolore repellat omnis error!</p>
                    </div>
                    <hr/>
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end md:text-start mb-10">
                    <time className="font-mono italic">2024-2030</time>
                    <div className="text-lg font-black">Company B</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quaerat, cupiditate nobis quo soluta reprehenderit pariatur quod rem dicta ea accusantium rerum, explicabo eaque placeat nisi sed error ut vero..</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                    <time className="font-mono italic">2030-</time>
                    <div className="text-lg font-black">Company C</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at officia rerum sequi obcaecati maxime nesciunt velit, cum eaque non fuga in modi impedit illum veritatis veniam odit iste nihil?</p>
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    );
  }