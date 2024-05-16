export default function Todo_List() {
  return (
    <div className="overflow-hidden h-[calc(100vh-12.5rem)] m-20">
      <div className=" overflow-auto h-[calc(100vh-22.5rem)] bg-gray-600 items-center justify-center rounded-md shadow-md">
        <div className="">
          <table className="table overflow-y-auto">
            {/* head */}
            <thead className=" text-2xl">
              <tr className=" text-center">
                <th>No</th>
                <th>Tugas</th>
                <th>Deadline</th>
                <th className=" text-center">Edit/Delete</th>
                <td>Selesai</td>
              </tr>
            </thead>
            <tbody className=" text-center">
              <tr className="hover">
                <th>1</th>
                <td>Membeli Tepung</td>
                <td>2024-05-20</td>
                <td>
                  <div className="flex w-full">
                    <div className="grid btn btn-outline btn-warning btn-md flex-grow card rounded-box place-items-center">
                      Edit
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid btn btn-outline btn-error btn-md flex-grow card rounded-box place-items-center">
                      Delete
                    </div>
                  </div>
                </td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-lg checkbox-success"
                    />
                  </label>
                </td>
              </tr>
              <tr className="hover">
                <th>2</th>
                <td>Mencuci Mobil</td>
                <td>2024-05-21</td>
                <td>
                  <div className="flex w-full">
                    <div className="grid btn btn-outline btn-warning btn-md flex-grow card rounded-box place-items-center">
                      Edit
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid btn btn-outline btn-error btn-md flex-grow card rounded-box place-items-center">
                      Delete
                    </div>
                  </div>
                </td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-lg checkbox-success"
                    />
                  </label>
                </td>
              </tr>
              <tr className="hover">
                <th>3</th>
                <td>Membayar Tagihan Listrik</td>
                <td>2024-05-22</td>
                <td>
                  <div className="flex w-full">
                    <div className="grid btn btn-outline btn-warning btn-md flex-grow card rounded-box place-items-center">
                      Edit
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid btn btn-outline btn-error btn-md flex-grow card rounded-box place-items-center">
                      Delete
                    </div>
                  </div>
                </td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-lg checkbox-success"
                    />
                  </label>
                </td>
              </tr>
              <tr className="hover">
                <th>4</th>
                <td>Mengantar Anak ke Sekolah</td>
                <td>2024-05-23</td>
                <td>
                  <div className="flex w-full">
                    <div className="grid btn btn-outline btn-warning btn-md flex-grow card rounded-box place-items-center">
                      Edit
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid btn btn-outline btn-error btn-md flex-grow card rounded-box place-items-center">
                      Delete
                    </div>
                  </div>
                </td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-lg checkbox-success"
                    />
                  </label>
                </td>
              </tr>
              <tr className="hover">
                <th>5</th>
                <td>Mengikuti Rapat Kantor</td>
                <td>2024-05-24</td>
                <td>
                  <div className="flex w-full">
                    <div className="grid btn btn-outline btn-warning btn-md flex-grow card rounded-box place-items-center">
                      Edit
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid btn btn-outline btn-error btn-md flex-grow card rounded-box place-items-center">
                      Delete
                    </div>
                  </div>
                </td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-lg checkbox-success"
                    />
                  </label>
                </td>
              </tr>
              <tr className="hover">
                <th>6</th>
                <td>Belanja Bulanan</td>
                <td>2024-05-25</td>
                <td>
                  <div className="flex w-full">
                    <div className="grid btn btn-outline btn-warning btn-md flex-grow card rounded-box place-items-center">
                      Edit
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid btn btn-outline btn-error btn-md flex-grow card rounded-box place-items-center">
                      Delete
                    </div>
                  </div>
                </td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-lg checkbox-success"
                    />
                  </label>
                </td>
              </tr>
              <tr className="hover">
                <th>7</th>
                <td>Olahraga Pagi</td>
                <td>2024-05-26</td>
                <td>
                  <div className="flex w-full">
                    <div className="grid btn btn-outline btn-warning btn-md flex-grow card rounded-box place-items-center">
                      Edit
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid btn btn-outline btn-error btn-md flex-grow card rounded-box place-items-center">
                      Delete
                    </div>
                  </div>
                </td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-lg checkbox-success"
                    />
                  </label>
                </td>
              </tr>
              <tr className="hover">
                <th>8</th>
                <td>Membaca Buku</td>
                <td>2024-05-27</td>
                <td>
                  <div className="flex w-full">
                    <div className="grid btn btn-outline btn-warning btn-md flex-grow card rounded-box place-items-center">
                      Edit
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid btn btn-outline btn-error btn-md flex-grow card rounded-box place-items-center">
                      Delete
                    </div>
                  </div>
                </td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-lg checkbox-success"
                    />
                  </label>
                </td>
              </tr>
              <tr className="hover">
                <th>9</th>
                <td>Menyiapkan Presentasi</td>
                <td>2024-05-28</td>
                <td>
                  <div className="flex w-full">
                    <div className="grid btn btn-outline btn-warning btn-md flex-grow card rounded-box place-items-center">
                      Edit
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid btn btn-outline btn-error btn-md flex-grow card rounded-box place-items-center">
                      Delete
                    </div>
                  </div>
                </td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-lg checkbox-success"
                    />
                  </label>
                </td>
              </tr>
              <tr className="hover">
                <th>10</th>
                <td>Mengunjungi Dokter</td>
                <td>2024-05-29</td>
                <td>
                  <div className="flex w-full">
                    <div className="grid btn btn-outline btn-warning btn-md flex-grow card rounded-box place-items-center">
                      Edit
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid btn btn-outline btn-error btn-md flex-grow card rounded-box place-items-center">
                      Delete
                    </div>
                  </div>
                </td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-lg checkbox-success"
                    />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className=" fixed right-20">
        <div className=" bg-gray-600 w-[calc(100vw-36rem)] text-center m-2 p-2 rounded-md">
          <table className="table">
            <thead>
              <tr className=" text-center">
                <th>Tugas</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Tugas"
                    className="input input-bordered w-full max-w-xs input-ghost input-md"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Deadline"
                    className="input input-bordered w-full max-w-xs input-ghost input-md"
                  />
                </td>
                <td>
                  <button className="btn btn-outline btn-success btn-md">
                    Add
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
