import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { sidebarData } from '../../data/sidebarData';

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [active, setActive] = useState({
    route: '/',
    nestedRoute: '',
    isDropDownActive: false
  });

  const handleRoute = ({ route, nestedRoute }) => {
    if (nestedRoute) {
      navigate(`${route}${nestedRoute}`);
    } else {
      navigate(route);
    }
  };

  useEffect(() => {
    const splitPath = location.pathname.split('/');

    const route = splitPath[1] !== '' ? `/${splitPath[1]}` : '/';
    const nestedRoute = splitPath[2] && (splitPath[2] !== '') ? `/${splitPath[2]}` : null;

    setActive({
      route,
      nestedRoute,
      isDropDownActive: !!nestedRoute
    });
  }, [location.pathname]);

  return (
    <div className="w-[300px] h-[calc(100vh-92px)] mt-[92px] pb-5 fixed leading-6 font-medium font-poppins">
      <ul className="w-full h-full px-[30px] grow overflow-y-auto scroll">
        {
          sidebarData.map((data, index) => (
            <li key={`sidebar_${index}`} className="flex flex-col">
              <div
                className={`py-2.5 mb-2.5 flex items-center justify-between cursor-pointer rounded-[10px] transition-colors duration-300
                  ${active.route === data.route ? 'bg-black text-white px-[11px]' : 'text-[#000] hover:!text-white hover:bg-black px-3'}
                `}
                onClick={() => handleRoute({
                  route: data.route,
                  nestedRoute: data?.nestedRoutes && (active.route !== data.route || !active.isDropDownActive)
                    ? data.nestedRoutes[0].route
                    : null
                })}
              >
                <div className="flex items-center justify-between">
                  <img
                    className="mr-2.5"
                    alt="kyc_image"
                    src={active.route === data.route ? data.selectedIcon : data.icon}
                  />
                  <span>{data.name}</span>
                </div>
                {
                  data?.nestedRoutes && (
                    <svg
                      className={`h-6 w-6 transform duration-150 ease-in-out
											${active.route === data.route && active.isDropDownActive
                          ? 'fill-white rotate-180'
                          : active.route === data.route
                            ? 'fill-white'
                            : 'fill-[#000]'
                        }
											`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  )
                }
              </div>
              {
                active.route === data.route && active.isDropDownActive && data.nestedRoutes
                  ? (
                    <div className="px-3 mb-2.5 flex justify-center">
                      <ul>
                        {
                          data.nestedRoutes.map((nestedData, index) => (
                            <li
                              key={`sidebar_nested_route_${index}`}
                              className={`mb-2.5 cursor-pointer duration-300
                              ${active.nestedRoute === nestedData.route ? 'text-[#5367FC]' : 'text-[#000] hover:text-[#5367FC]'}
                            `}
                              onClick={() => handleRoute({
                                route: data.route,
                                nestedRoute: nestedData.route
                              })}
                            >
                              {nestedData.name}
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  )
                  : null}
            </li>
          ))}
      </ul>
    </div>
  );
};