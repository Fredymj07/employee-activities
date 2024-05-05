import styled from "styled-components";

export default function footer() {
	return (
		<FooterContainer className="main-footer mt-5">
			<div className="footer-middle">
				<div className="container">
					<div className="row">
						{/* Column 1 */}
						<div className="col-md-4 col-sm-6">
							<h4>Fredy Montaña</h4>
							<ul className="list-unstyled">
								<li>fredy.montana-a@uniminuto.edu.co</li>
							</ul>
						</div>
						{/* Column 2 */}
						<div className="col-md-4 col-sm-6">
							<h4>Geovani Rincón</h4>
							<ul className="list-unstyled">
								<li>geovani.rincon@uniminuto.edu.co</li>
							</ul>
						</div>
						{/* Column 3 */}
						<div className="col-md-4 col-sm-6">
							<h4>Alberto Montaña</h4>
							<ul className="list-unstyled">
								<li>jesus.montana@uniminuto.edu.co</li>
							</ul>
						</div>
					</div>
					{/* Footer Bottom */}
					<div className="footer-bottom">
						<p className="text-xs-center">
							&copy;{new Date().getFullYear()} Employee Activities
						</p>
					</div>
				</div>
			</div>
		</FooterContainer>
	);
}

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
		text-align: center;
    }
 `;
