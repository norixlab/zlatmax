'use client'
import { useState, useEffect } from 'react';

const Geo = () => {
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                error => {
                    console.error('Ошибка получения местоположения:', error);
                }
            );
        } else {
            console.error('Geolocation не поддерживается вашим браузером');
        }
    }, []);

    useEffect(() => {
        if (location) {
            const { latitude, longitude } = location;
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`)
                .then(response => response.json())
                .then(data => {
                    if (data.results && data.results.length > 0) {
                        setAddress(data.results[0].formatted_address);
                    }
                })
                .catch(error => {
                    console.error('Ошибка при получении адреса:', error);
                });
        }
    }, [location]);

    return (
        <div>
            {address ? (
                <p>Ваше местоположение: {address}</p>
            ) : (
                <p>Определение местоположения...</p>
            )}
        </div>
    );
};

export default Geo;
