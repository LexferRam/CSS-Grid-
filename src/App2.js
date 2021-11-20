const App2 = () => {
    return (
        <>
            <div style={{ display: 'grid', height: '100vh' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)'}}>
                    <div style={{gridColumn: '1/5',gridRow:'1/3'}}>
                        <img src="/descarga.jpeg" style={{objectFit:'cover',height: '100vh',width: '100%', objectPosition:'center center'}} alt='...' />
                    </div>
                    <div style={{gridColumn: '1/5',gridRow:'1/3', display:'flex',alignItems: 'center',justifyContent: 'center',flexDirection:'column'}}>
                        <h1>Formulario</h1>
                        <form style={{display:'flex',alignItems: 'center',justifyContent: 'center',flexDirection:'column'}}>
                        <input type="text" />
                        <input type="text" />
                        <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ border: 'red 1px solid', height: '100vh' }}>Section 2</div>
        </>
    )
}

export default App2
