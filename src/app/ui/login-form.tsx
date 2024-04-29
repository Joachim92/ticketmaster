'use client';

import { Button } from '@/app/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from "@/app/lib/actions";


export default function LoginForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined)

    return (
        <form action={dispatch} className="space-y-3">
            <div className="flex">
                <label>Username</label>
                <input type="text" defaultValue="Type your username"/>
            </div>
            <div className="flex">
                <label>Password</label>
                <input type="text"/>
            </div>
            <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
            >
                <LoginButton />
                {errorMessage && (
                    <>
                        <p className="text-sm text-red-500">{errorMessage}</p>
                    </>
                )}
            </div>
        </form>
    );
}

function LoginButton() {
    const { pending } = useFormStatus()

    return (
        <Button className="mt-4 w-full" aria-disabled={pending}>
            Log in
        </Button>
    );
}