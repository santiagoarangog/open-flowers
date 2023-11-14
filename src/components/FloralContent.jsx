import React from 'react';

function FloralContent() {
    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <a href="#" className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=2250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
                        </a>
                        <a href="#" className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src="https://plus.unsplash.com/premium_photo-1675919640620-067b83eeb38b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                        </a>
                        <a href="#" className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src="https://images.unsplash.com/photo-1435783459217-ee7fe5414abe?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
                        </a>
                        <a href="#" className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src="https://images.unsplash.com/photo-1457089328109-e5d9bd499191?q=80&w=1875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                        </a>
                        </div>
                </div>
            </div>
        </>
    )
}

export default FloralContent;
