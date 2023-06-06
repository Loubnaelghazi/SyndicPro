import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Adresse e-mail" />
                    <div className="mt-2">
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <InputLabel htmlFor="password" value="Mot de passe" />
                        <div className="text-sm password mt-4">
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className=" font-semibold  text-primary-color hover:text-indigo-500 "
                                >
                                    Mot de passe oublié ?
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="mt-2">
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ml-2 text-sm text-gray-600">
                            Se souvenir de moi
                        </span>
                    </label>
                </div>

                <PrimaryButton className="mt-4 w-full" disabled={processing}>
                    Se connecter
                </PrimaryButton>
                <div className=" font-regular text-sm  text-primary-color flex justify-center mt-2 ">
                    Vous n'êtes pas un membre?{" "}
                    <Link
                        href={"/register"}
                        className="ml-1 font-semibold  hover:text-indigo-500 "
                    >
                        Inscrivez-vous içi
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
