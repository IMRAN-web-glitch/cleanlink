import React from 'react'

const about = () => {
    return (<>
        <div style={{
            background: '#FFF9C4',
            minHeight: '100vh',
            padding: '40px 0',
            color: '#fff',
            fontFamily: 'Segoe UI, Arial, sans-serif'
        }}>
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                background: '#FFF59D',
                borderRadius: '18px',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                padding: '40px 32px',
                textAlign: 'center',
                color: '#000',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    marginBottom: '10px',
                    gap: '160px'
                }}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/892/892692.png"
                        alt="Clean Link Logo"
                        style={{ width: '90px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                    />
                    <h1 style={{ fontWeight: 700, fontSize: '2.5rem', marginBottom: '12px' }}>About Clean Link</h1>
                </div>
                <p style={{ fontSize: '1.2rem', marginBottom: '24px', lineHeight: 1.6 }}>
                    Clean Link is a simple and fast URL shortener that helps you reduce long, messy links into short, shareable ones. No login or registration required—just paste your link and get a clean, easy-to-share URL instantly!
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '24px' }}>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/929/929564.png" alt="No Login" style={{ width: '48px', marginBottom: '8px' }} />
                        <div style={{ fontWeight: 600 }}>No Login Needed</div>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="Fast" style={{ width: '48px', marginBottom: '8px' }} />
                        <div style={{ fontWeight: 600 }}>Instant Results</div>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/565/565547.png" alt="Share" style={{ width: '48px', marginBottom: '8px' }} />
                        <div style={{ fontWeight: 600 }}>Easy Sharing</div>
                    </div>
                </div>
                <p style={{ fontSize: '1rem', marginBottom: '18px', color: '#000' }}>
                    Whether you’re sharing links on social media, sending them in emails, or just want a cleaner way to present your URLs, Clean Link makes it effortless.
                </p>
                <a
                    href="/"
                    style={{
                        display: 'inline-block',
                        background: '#fff',
                        color: '#0072ff',
                        padding: '12px 32px',
                        borderRadius: '8px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                        transition: 'background 0.2s, color 0.2s'
                    }}
                >
                    Try Clean Link Now
                </a>
            </div>
        </div>
    </>
    )
}

export default about
