import React from 'react'
import Sale from './Sale'

export default function SalesList({sales}) {
    return (
            <div className="min-w-full divide-y divide-gray-200">
              <div className="bg-gray-50">
                <div className="flex items-center">
                  <div
                    scope="col"
                    className="px-6 py-3 flex text-left text-xs font-medium text-gray-500 uppercase divacking-wider w-1/4"
                  >
                    Nome do cliente
                  </div>
                  <div
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase divacking-wider w-1/4"
                  >
                    Data da compra
                  </div>
                  <div
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase divacking-wider w-1/4"
                  >
                    Valor
                  </div>
                  <div
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4"
                  >
                    Ação
                  </div>

                </div>
              </div>
              <div className="overflow-auto w-full max-h-96">
                <div className="bg-white divide-y divide-gray-200">
                        {sales.map(sale=><Sale key={sale.id} sale={sale}/>)}
                </div>
              </div>
            </div>
    )
}
