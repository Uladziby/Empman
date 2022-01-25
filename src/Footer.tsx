import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4">
        <section className="footer_section">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Email for contact</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input type="email" id="form5Example21" className="form-control" placeholder="yanushevskyv@gmail.com" />
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Send
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </footer>
  );
};
