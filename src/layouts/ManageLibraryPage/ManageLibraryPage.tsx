import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AddNewBook } from './components/AddNewBook';
import { AdminMessages } from './components/AdminMessages';
import { ChangeQuantityOfBooks } from './components/ChangeQuantityOfBooks';
import { useAuth0 } from '@auth0/auth0-react';
import { SpinnerLoading } from '../Utils/SpinnerLoading';

export const ManageLibraryPage = () => {

    const {getIdTokenClaims } = useAuth0();
    const [roles, setRoles] = useState<string[] | null>(null); // Set roles to null initially
}