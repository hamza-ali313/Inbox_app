import { useEffect, useState } from 'react';
// import supabase from '../supabaseClient';

const ChatList = ({ setSelectedThread }) => {
    const [threads, setThreads] = useState([
        {
            id: 1,
            title: "Chat with Alice",
            latestMessage: "See you soon!",
            updated_at: "2024-07-23T10:00:00Z",
        },
        {
            id: 2,
            title: "Project Discussion",
            latestMessage: "Let's finalize the design.",
            updated_at: "2024-07-23T12:30:00Z",
        },
        {
            id: 3,
            title: "Support Chat",
            latestMessage: "Thank you for your help!",
            updated_at: "2024-07-22T15:45:00Z",
        },
        {
            id: 4,
            title: "Random Thoughts",
            latestMessage: "Check out this cool article.",
            updated_at: "2024-07-23T08:20:00Z",
        },
        {
            id: 5,
            title: "Weekend Plans",
            latestMessage: "Let's go hiking!",
            updated_at: "2024-07-22T19:00:00Z",
        },

    ]);

    //   useEffect(() => {
    //     const fetchThreads = async () => {
    //       let { data, error } = await supabase.from('conversations').select('*');
    //       if (error) console.error(error);
    //       else setThreads(data);
    //     };

    //     fetchThreads();
    //   }, []);

    return (
        <div className="chat-list">
            {threads.map(thread => (
                // onClick={() => setSelectedThread(thread.id)}
                <div key={thread.id} >
                    <h3>{thread.title}</h3>
                    {/* <small>{new Date(thread.updated_at).toLocaleString()}</small> */}
                </div>
            ))}
        </div>
    );
};

export default ChatList;
