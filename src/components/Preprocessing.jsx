import React from "react";

const Preprocessing = ({ dataPreprocessing }) => {
  return (
    <>
      <div class="relative overflow-x-auto shadow-md p-4">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                No
              </th>
              <th scope="col" class="px-6 py-3">
                Teks
              </th>
            </tr>
          </thead>
          <tbody>
            {dataPreprocessing?.map((item, index) => (
              <tr class="bg-white border-b">
                <td class="px-6 py-4">{index + 1}</td>
                <td class="px-6 py-4">{item.tweet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Preprocessing;
