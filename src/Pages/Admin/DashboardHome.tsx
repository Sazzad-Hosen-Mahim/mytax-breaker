import { useEffect, useState } from "react";
import {
  FaTrash,
  FaEye,
  FaSearch,
  FaFilter,
  FaSort,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

interface Booking {
  id: number;
  fullName: string;
  email: string;
  service: string;
  phoneNumber: string;
  subject: string;
  date: string;
  time: string;
  message: string;
  createdAt: string;
}

interface PaginatedResponse {
  data: Booking[];
  total: number;
  page: number;
  lastPage: number;
}

const DashboardHome = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [nameSort, setNameSort] = useState<"asc" | "desc" | null>(null);
  const [idSort, setIdSort] = useState<"asc" | "desc" | null>(null);
  const [selectedService, setSelectedService] = useState<string>("all");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [lastPage, setLastPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch data from the backend with pagination
  useEffect(() => {
    const fetchBookings = async () => {
      setIsLoading(true);
      const token = localStorage.getItem("access_token");
      try {
        const res = await fetch(
          `http://localhost:3000/booking?page=${currentPage}&limit=${itemsPerPage}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          const errorData = await res.json();
          console.error("Error response from backend:", errorData);
          setBookings([]);
          setTotalItems(0);
          setIsLoading(false);
          return;
        }
        const data: PaginatedResponse = await res.json();
        setBookings(data.data);
        setFilteredBookings(data.data);
        setTotalItems(data.total);
        setLastPage(data.lastPage);
      } catch (error) {
        console.error("Failed to fetch bookings", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, [currentPage, itemsPerPage]);

  // Apply filters and sorting to the current page's data
  useEffect(() => {
    let result = [...bookings];

    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (booking) =>
          booking.fullName.toLowerCase().includes(term) ||
          booking.email.toLowerCase().includes(term) ||
          booking.phoneNumber.toLowerCase().includes(term) ||
          booking.service.toLowerCase().includes(term) ||
          booking.subject.toLowerCase().includes(term)
      );
    }

    // Apply service filter
    if (selectedService !== "all") {
      result = result.filter((booking) => booking.service === selectedService);
    }

    // Apply sorting
    if (nameSort) {
      result.sort((a, b) => {
        const nameA = a.fullName.toLowerCase();
        const nameB = b.fullName.toLowerCase();
        return nameSort === "asc"
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      });
    } else if (idSort) {
      result.sort((a, b) => (idSort === "asc" ? a.id - b.id : b.id - a.id));
    }

    setFilteredBookings(result);
  }, [bookings, searchTerm, selectedService, nameSort, idSort]);

  // Get unique services for filter dropdown
  const services = [
    "all",
    ...new Set(bookings.map((booking) => booking.service)),
  ];

  // Pagination functions
  const goToPage = (page: number) => {
    if (page >= 1 && page <= lastPage) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  // Delete functions
  const handleDeleteClick = (id: number) => {
    setSelectedId(id);
    setShowDeleteModal(true);
  };

  const handleViewClick = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowViewModal(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedId !== null) {
      try {
        const token = localStorage.getItem("access_token");
        const response = await fetch(
          `http://localhost:3000/booking/${selectedId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete booking");
        }

        // Refresh the current page after deletion
        const res = await fetch(
          `http://localhost:3000/booking?page=${currentPage}&limit=${itemsPerPage}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.ok) {
          const data: PaginatedResponse = await res.json();
          setBookings(data.data);
          setTotalItems(data.total);
          setLastPage(data.lastPage);
        }
      } catch (error) {
        console.error("Error deleting booking:", error);
      } finally {
        setShowDeleteModal(false);
        setSelectedId(null);
      }
    }
  };

  const handleCancel = () => {
    setShowDeleteModal(false);
    setShowViewModal(false);
    setSelectedId(null);
    setSelectedBooking(null);
  };

  const toggleNameSort = () => {
    setNameSort((prev) => {
      if (prev === "asc") return "desc";
      if (prev === "desc") return null;
      return "asc";
    });
    setIdSort(null);
  };

  const toggleIdSort = () => {
    setIdSort((prev) => {
      if (prev === "asc") return "desc";
      if (prev === "desc") return null;
      return "asc";
    });
    setNameSort(null);
  };

  // Generate page numbers for pagination
  const getPageNumbers = (): number[] => {
    const pages: number[] = [];
    const maxVisiblePages = 5;

    if (lastPage <= maxVisiblePages) {
      for (let i = 1; i <= lastPage; i++) {
        pages.push(i);
      }
    } else {
      const half = Math.floor(maxVisiblePages / 2);
      let start = currentPage - half;
      let end = currentPage + half;

      if (start < 1) {
        start = 1;
        end = maxVisiblePages;
      }

      if (end > lastPage) {
        end = lastPage;
        start = lastPage - maxVisiblePages + 1;
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  return (
    <div className="p-4">
      <div className="lg:flex justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">All Bookings</h2>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0 w-full sm:w-auto">
          {/* Search Input */}
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search bookings..."
              className="pl-10 pr-4 py-2 border border-gray-400 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Service Filter Dropdown */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaFilter className="text-blue-800" />
            </div>
            <select
              className="pl-10 pr-4 py-2 border border-gray-400 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service === "all" ? "All Services" : service}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Items per page selector */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Show</span>
          <select
            className="border border-gray-400 text-gray-600 rounded px-2 py-1 text-sm"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <span className="text-sm text-gray-600">entries</span>
        </div>
        <div className="text-sm text-gray-600">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{" "}
          entries
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto bg-white rounded-lg shadow mb-4">
            <div className="min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-900">
                    <tr>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer"
                        onClick={toggleIdSort}
                      >
                        <div className="flex items-center">
                          ID
                          <FaSort
                            className={`ml-1 ${
                              idSort ? "text-blue-200" : "text-gray-300"
                            }`}
                          />
                          {idSort === "asc" && (
                            <span className="ml-1 text-xs">↑</span>
                          )}
                          {idSort === "desc" && (
                            <span className="ml-1 text-xs">↓</span>
                          )}
                        </div>
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer"
                        onClick={toggleNameSort}
                      >
                        <div className="flex items-center">
                          Name
                          <FaSort
                            className={`ml-1 ${
                              nameSort ? "text-blue-200" : "text-gray-300"
                            }`}
                          />
                          {nameSort === "asc" && (
                            <span className="ml-1 text-xs">↑</span>
                          )}
                          {nameSort === "desc" && (
                            <span className="ml-1 text-xs">↓</span>
                          )}
                        </div>
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Service
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredBookings.length > 0 ? (
                      filteredBookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-blue-50">
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                            {booking.id}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {booking.fullName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {booking.email}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                            {booking.phoneNumber}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                            {booking.subject}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                            {booking.service}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {new Date(booking.date).toLocaleDateString()}
                            </div>
                            <div className="text-sm text-gray-500">
                              {booking.time}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex space-x-3">
                              <button
                                onClick={() => handleViewClick(booking)}
                                className="text-blue-600 hover:text-blue-900"
                                title="View"
                              >
                                <FaEye className="h-5 w-5" />
                              </button>
                              <button
                                onClick={() => handleDeleteClick(booking.id)}
                                className="text-red-600 hover:text-red-900"
                                title="Delete"
                              >
                                <FaTrash className="h-5 w-5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={7}
                          className="px-4 py-6 text-center text-gray-500"
                        >
                          No bookings found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4">
            <div className="text-sm text-gray-600">
              Page {currentPage} of {lastPage}
            </div>
            <div className="flex gap-1">
              <button
                onClick={() => goToPage(1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaAngleDoubleLeft />
              </button>
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaAngleLeft />
              </button>

              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-3 py-1 rounded border ${
                    currentPage === page ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === lastPage}
                className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaAngleRight />
              </button>
              <button
                onClick={() => goToPage(lastPage)}
                disabled={currentPage === lastPage}
                className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaAngleDoubleRight />
              </button>
            </div>
          </div>
        </>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 backdrop-blur-sm" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Are you sure you want to delete this booking?
                </h3>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleConfirmDelete}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Details Modal */}
      {showViewModal && selectedBooking && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 backdrop-blur-sm" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Booking Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Full Name</h4>
                    <p className="mt-1 text-gray-600">
                      {selectedBooking.fullName}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="mt-1 text-gray-600">
                      {selectedBooking.email}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Service</h4>
                    <p className="mt-1 text-gray-600">
                      {selectedBooking.service}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone Number</h4>
                    <p className="mt-1 text-gray-600">
                      {selectedBooking.phoneNumber}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Subject</h4>
                    <p className="mt-1 text-gray-600">
                      {selectedBooking.subject}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Date & Time</h4>
                    <p className="mt-1 text-gray-600">
                      {new Date(selectedBooking.date).toLocaleDateString()} at{" "}
                      {selectedBooking.time}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Message</h4>
                    <p className="mt-1 text-gray-600 whitespace-pre-line">
                      {selectedBooking.message}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleCancel}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
