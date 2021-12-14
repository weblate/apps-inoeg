import { Trans } from '@lingui/macro';
import { BackLink } from 'apps/common/BackLink';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import type { Provider } from 'types';
import { Button, Title } from 'ui';
import { useMediatorApi } from '../common/MediatorApiContext';
import { ConfirmProviderModal } from './ConfirmProviderModal';
import { UnconfirmProviderModal } from './UnconfirmProviderModal';

export const ProviderShowPage: React.FC = () => {
    const [provider, setProvider] = useState<Provider>();
    const [modal, setModal] = useState<'confirm' | 'unconfirm' | null>(null);
    const { id } = useParams();
    const api = useMediatorApi();

    useEffect(() => {
        if (id) {
            api.getProvider(id).then((provider) => {
                if (provider) {
                    setProvider(provider);
                }
            });
        }
    }, [api, id]);

    if (!provider) {
        return <main>Provider nicht gefunden</main>;
    }

    return (
        <main>
            <BackLink href="/mediator/providers">Zurück zur Übersicht</BackLink>

            <Title>
                <Trans id="mediator.providers.title">Provider Show</Trans>
            </Title>

            <table className="table striped">
                <thead>
                    <tr>
                        <th>
                            <Trans id="mediator.provider-show.field">
                                Feld
                            </Trans>
                        </th>
                        <th>
                            <Trans id="mediator.provider-show.value">
                                Wert
                            </Trans>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <Trans id="mediator.provider-show.verified">
                                Verifiziert?
                            </Trans>
                        </th>
                        <td>{provider.verified ? 'ja' : 'nein'}</td>
                    </tr>
                    <tr>
                        <th>
                            <Trans id="mediator.provider-show.name">Name</Trans>
                        </th>
                        <td>{provider.name}</td>
                    </tr>
                    <tr>
                        <th>
                            <Trans id="mediator.provider-show.street">
                                Straße
                            </Trans>
                        </th>
                        <td>{provider.street}</td>
                    </tr>
                    <tr>
                        <th>
                            <Trans id="mediator.provider-show.city">
                                Stadt
                            </Trans>
                        </th>
                        <td>{provider.city}</td>
                    </tr>
                    <tr>
                        <th>
                            <Trans id="mediator.provider-show.zip-code">
                                Postleitzahl
                            </Trans>
                        </th>
                        <td>{provider.zipCode}</td>
                    </tr>
                    <tr>
                        <th>
                            <Trans id="mediator.provider-show.email">
                                E-Mail
                            </Trans>
                        </th>
                        <td>{provider.email}</td>
                    </tr>
                    <tr>
                        <th>
                            <Trans id="mediator.provider-show.phone">
                                Telefonnummer
                            </Trans>
                        </th>
                        <td>{provider.phone}</td>
                    </tr>
                    <tr>
                        <th>
                            <Trans id="mediator.provider-show.description">
                                Beschreibung
                            </Trans>
                        </th>
                        <td>{provider.description}</td>
                    </tr>
                </tbody>
            </table>

            <div className="buttons-list">
                {!provider.verified ? (
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={() => setModal('confirm')}
                    >
                        <Trans id="mediator.provider-show.button-confirm">
                            Anbieter bestätigen
                        </Trans>
                    </Button>
                ) : (
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setModal('unconfirm')}
                    >
                        <Trans id="mediator.provider-show.button-unconfirm">
                            Anbieter sperren
                        </Trans>
                    </Button>
                )}
            </div>
            {modal === 'confirm' && (
                <ConfirmProviderModal
                    provider={provider}
                    onClose={() => setModal(null)}
                />
            )}
            {modal === 'unconfirm' && (
                <UnconfirmProviderModal
                    provider={provider}
                    onClose={() => setModal(null)}
                />
            )}
        </main>
    );
};