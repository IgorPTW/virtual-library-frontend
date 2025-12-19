import { useEffect, useState } from 'react';
import MessageModel from '../../../models/MessageModel';
import { SpinnerLoading } from '../../Utils/SpinnerLoading';
import { Pagination } from '../../Utils/Pagination';
import { useAuth0 } from '@auth0/auth0-react';

export const Messages = () => {

    const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
    const [isLoadingMessages, setIsLoadingMessages] = useState(true);
    const [httpError, setHttpError] = useState(null);

    // Messages
    const [messages, setMessages] = useState<MessageModel[]>([]);

    // Pagination
    const [messagesPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchUserMessages = async () => {
            if(isAuthenticated) {
                const accessToken = await getAccessTokenSilently();
                const url = `http://localhost:8080/api/messages/search/findByUserEmail?userEmail=${user?.email}&page=${currentPage - 1}&size=${messagesPerPage}`;
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                };
                const messagesResponse = await fetch(url, requestOptions);
                if(!messagesResponse.ok) {
                    throw new Error('Something went wrong!');
                }
                const messagesResponseJson = await messagesResponse.json();
                setMessages(messagesResponseJson._embedded.messages);
                setTotalPages(messagesResponseJson.page.totalPages);
            }
            setIsLoadingMessages(false);
        }
        fetchUserMessages().catch((error: any) => {
            setIsLoadingMessages(false);
            setHttpError(error.messages);
        })
        window.scrollTo(0, 0);
    }, [isAuthenticated, user, getAccessTokenSilently, currentPage]);

    if(isLoadingMessages) {
        return (
            <SpinnerLoading/>
        );
    }
}