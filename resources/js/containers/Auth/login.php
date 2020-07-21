<div className="signin-sidebar auth-sidebar">
    <div className="signin-sidebar-body">
        <a href="" className="sidebar-logo mg-b-40">Remit<span>Scanner</span></a>
        <h1 className="signin-title">Welcome back!</h1>
        <h2 className="signin-subtitle">Please signin to continue.</h2>
        <div className="signin-form">
            <form method="POST" action="">
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input name="email" type="email" className="form-control"
                           placeholder="Enter your email address"
                           value="" required autoComplete="email" autoFocus>
                </div>
                <div className="form-group">
                    <label className="d-flex justify-content-between" htmlFor="password">
                        <span>Password</span>
                    </label>
                    <input name="password" type="password"
                           className="form-control  @error('password') is-invalid @enderror"
                           placeholder="Enter your password" required autoComplete="current-password">
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="remember"
                               id="remember">
                        <label className="form-check-label" htmlFor="remember">
                            Remember Me
                        </label>
                    </div>
                </div>
                <div className="form-group d-flex mg-b-0">
                    <button type="submit" className="btn btn-brand-01 btn-uppercase flex-fill">Sign In
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
