import styled from "styled-components";

const footer = () => {
	return (
		<FooterContainer className="main-footer mt-5">
			<div className="footer-middle">
				<div className="container">
					<div className="row">
						{/* Column 1 */}
						<div className="col-md-3 col-sm-6">
							<h4>Lorem ipsum</h4>
							<ul className="list-unstyled">
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
							</ul>
						</div>
						{/* Column 2 */}
						<div className="col-md-3 col-sm-6">
							<h4>Lorem ipsum</h4>
							<ul className="list-unstyled">
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
							</ul>
						</div>
						{/* Column 3 */}
						<div className="col-md-3 col-sm-6">
							<h4>Lorem ipsum</h4>
							<ul className="list-unstyled">
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
							</ul>
						</div>
						{/* Column 4 */}
						<div className="col-md-3 col-sm-6">
							<h4>Lorem ipsum</h4>
							<ul className="list-unstyled">
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
							</ul>
						</div>
					</div>
					{/* Footer Bottom */}
					<div className="footer-bottom">
						<p className="text-xs-center">
							&copy;{new Date().getFullYear()} Employee Activities
							- All Rights Reserverd
						</p>
					</div>
				</div>
			</div>
		</FooterContainer>
	);
}

export default footer;

const FooterContainer = styled.footer`
    .footer-middle {
		position: fixed;
		bottom: 0;
		width: 100%;
        background: var(--mainDark);
        padding-top: 3rem;
        color: var(--mainWhite);
    }

    .footer-bottom {
        padding-top: 3rem;
        padding-bottom: 2rem;
    }
 `;
